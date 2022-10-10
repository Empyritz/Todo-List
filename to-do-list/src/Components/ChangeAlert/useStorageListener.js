import React from 'react';

function useStorageListener(updateTodos) {

    const [storageChange, setStorageChange] = React.useState(false);
    
    React.useEffect(() => {
      const onChange = (change) => {
        if (change.key === "TODOS_V1") {
          console.log("Hubo cambios en TODOS_V1");
          setStorageChange(true);
        }
      };
    
      window.addEventListener("storage", onChange);
    
      return () => {
        window.removeEventListener("storage", onChange);
      };
    }, []);

    const toggleShow =() => {
      updateTodos()
      setStorageChange(false)
    }

    return  {
      show: storageChange,
      toggleShow,
    }
    
  
}

export { useStorageListener }




//---------USING HOC'S High Order Component---------------//

// function withStorageListener(WrappedComponent) {
//   return function WrappedComponentWithStorageListener(props) {
//     const [storageChange, setStorageChange] = React.useState(false);
    
//     React.useEffect(() => {
//       const onChange = (change) => {
//         if (change.key === "TODOS_V1") {
//           console.log("Hubo cambios en TODOS_V1");
//           setStorageChange(true);
//         }
//       };
    
//       window.addEventListener("storage", onChange);
    
//       return () => {
//         window.removeEventListener("storage", onChange);
//       };
//     }, []);

//     const toggleShow =() => {
//       props.sincronizedTodos()
//       setStorageChange(false)
//     }

//     return ( 
//       <WrappedComponent 
//         show={storageChange} 
//         toggleShow={toggleShow}
//       />
//     )
//   }
// }

// export { withStorageListener }


