const todoReducer = (currentItems, action) => {
    let newState = currentItems;
    switch (action.type) {
      case "ADD":
        newState = [...currentItems, action.payload];
        break;
      case "DELETE":
        newState = currentItems.filter(
          (item) => item.id !== action.payload.todoId
        );
        break;
      default:
        break;
    }
    return newState;
  };
  
  export default todoReducer