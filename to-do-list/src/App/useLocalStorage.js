import { useEffect, useState } from "react"

export function useLocalStorage (itemName, initialValue) {
  const [sincronizedItem, setSincronizedItem] = useState(true)
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(true)
  const [item, setItem] = useState(initialValue)

  
  useEffect(()=> {
    setTimeout(()=> {
      try {
        const locaStorageItem = JSON.parse(localStorage.getItem(itemName))
        let parsedItem;

        if(!locaStorageItem){
          localStorage.setItem(itemName, JSON.stringify(initialValue))
          parsedItem = initialValue
        }
        else{
          parsedItem = locaStorageItem
        }

        setItem(parsedItem)
        setLoading(false)
        setSincronizedItem(true)
      }
      catch (err) {
        setError(err)
      }
    }, 1000)
  }, [sincronizedItem])


  const saveItem = (newItem) => {
    try {
      const stringifiedItem = JSON.stringify(newItem)
      localStorage.setItem(itemName, stringifiedItem)
      setItem(newItem)
    } 
    catch (err) {
      setError(err)
    }
  }

  const sincronizeItem = () => {
    setLoading(true)
    setSincronizedItem(false)
  }

  return {item, saveItem, loading, error, sincronizeItem};
  // return [item, saveItem];

}