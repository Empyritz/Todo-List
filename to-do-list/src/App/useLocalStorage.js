import { useEffect, useState } from "react"

export function useLocalStorage (itemName, initialValue) {
  const [synchronizedItem, setSynchronizedItem] = useState(true)
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
        setSynchronizedItem(true)
      }
      catch (err) {
        setError(err)
      }
    }, 1000)
  }, [synchronizedItem])


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

  const updateItem = () => {
    setLoading(true)
    setSynchronizedItem(false)
  }

  return {item, saveItem, loading, error, updateItem};
  // return [item, saveItem];

}