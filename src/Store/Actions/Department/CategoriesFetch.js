import axios from 'axios'
// import { DepartmentAction } from './DepartmentAction'
import { CategoriesAction } from './CategoriesAction'



const getCategoriesData = () => {
    return async (dispatch) => {
        await axios.get("http://fakestoreapi.com/products/categories")
            .then(response => {
                const Data = response.data;
                
                dispatch(CategoriesAction(Data))
                // console.log ("DepartmentData",Data)
            })
            .catch((error) => {
                if (error && error.response) {
                    if (error.response.status === 400) {
                        alert(error.response.data.message);

                    }
                    else if (error.response.status === 401) {
                        alert(error.response.data.message);
                    }
                    else if (error.response.status === 404) {
                        alert(error.response.data.message);
                    }
                    else if (error.response.status === 500) {
                        alert("Internal server error");
                    }
                    else {
                        alert("Something went wrong. Please try again later.");
                    }
                }
                else {
                    alert("Something went wrong. Please try again later.");
              
                }

            }
            )
    }
}

export default getCategoriesData;