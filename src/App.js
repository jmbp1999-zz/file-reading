import logo from "./logo.svg";
import "./App.css";
import { Products } from "./Products/Products";
import { NavBar } from "./NavBar/NavBar";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
function App() {
    const [originalProducts, setoriginalProducts] = useState([]);
    const [duplicateProducts, setDuplicateProducts] = useState(originalProducts);
    const [size, setSize] = useState("all");
    const [type, setType] = useState("all");
    useEffect(() => {
        async function fetchData() {
            const data = await axios.get("https://my-json-server.typicode.com/prasadhewage/ecommerce/shipments");
            setoriginalProducts(data.data);
            setDuplicateProducts(data.data);
        }
        fetchData();
    }, []);
    const filterBySize = (size) => {
        setSize(size);
        if (size == "all") {
            if (type != "all") {
                setDuplicateProducts(originalProducts.filter((product) => product.details.type == type));
            } else {
                setDuplicateProducts(originalProducts);
            }
        } else {
            if (type == "all") {
                setDuplicateProducts(originalProducts.filter((product) => product.details.size == size));
            } else {
                setDuplicateProducts(
                    originalProducts.filter((product) => product.details.size == size && product.details.type == type)
                );
            }
        }
    };

    const filterByType = (type) => {
        setType(type);
        if (type == "all") {
            if (size != "all") {
                setDuplicateProducts(originalProducts.filter((product) => product.details.size == size));
            } else {
                setDuplicateProducts(originalProducts);
            }
        } else {
            if (size == "all") {
                setDuplicateProducts(originalProducts.filter((product) => product.details.type == type));
            } else {
                originalProducts.filter((product) => product.details.size == size && product.details.type == type);
            }
        }
    };
    return (
        <div>
            <NavBar></NavBar>
            <div class='sidenav'>
                <button
                    type='button'
                    class='btn btn-primary'
                    data-toggle='button'
                    aria-pressed='false'
                    autocomplete='off'
                    onClick={() => {
                        filterBySize("xsmall");
                    }}
                >
                    xsmall
                </button>
                <br></br>
                <br></br>
                <button
                    type='button'
                    class='btn btn-primary'
                    data-toggle='button'
                    aria-pressed='false'
                    autocomplete='off'
                    onClick={() => {
                        filterBySize("small");
                    }}
                >
                    small
                </button>
                <br></br>
                <br></br>
                <button
                    type='button'
                    class='btn btn-primary'
                    data-toggle='button'
                    aria-pressed='false'
                    autocomplete='off'
                    onClick={() => {
                        filterBySize("large");
                    }}
                >
                    large
                </button>
                <br></br>
                <br></br>
                <button
                    type='button'
                    class='btn btn-primary'
                    data-toggle='button'
                    aria-pressed='false'
                    autocomplete='off'
                    onClick={() => {
                        filterBySize("all");
                    }}
                >
                    All Sizes
                </button>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <button
                    type='button'
                    class='btn btn-primary'
                    data-toggle='button'
                    aria-pressed='false'
                    autocomplete='off'
                    onClick={() => {
                        filterByType("t-shirt");
                    }}
                >
                    {" "}
                    T-shirt
                </button>
                <br></br>
                <br></br>
                <button
                    type='button'
                    class='btn btn-primary'
                    data-toggle='button'
                    aria-pressed='false'
                    autocomplete='off'
                    onClick={() => {
                        filterByType("dress shirts");
                    }}
                >
                    {" "}
                    Dress Shirts
                </button>
                <br></br>
                <br></br>
                <button
                    type='button'
                    class='btn btn-primary'
                    data-toggle='button'
                    aria-pressed='false'
                    autocomplete='off'
                    onClick={() => {
                        filterByType("all");
                    }}
                >
                    {" "}
                    All Types
                </button>
            </div>
            <div class='main'>
                <Products products={duplicateProducts}></Products>
            </div>
        </div>
    );
}

export default App;
