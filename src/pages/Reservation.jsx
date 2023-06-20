import { Form, InputGroup, Row, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
function Reservation(){
  const [ville, setVille] = useState([])
  const data = ville
  const [form, setForm] = useState({
    nom: "",
    prenom: "",
    email: "",
    telephone: "",
    villeDepart: "",
    villeArrive: "",
  });
  const {nom, prenom, email, telephone, villeArrive, villeDepart} = form
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };
 
  console.log(data)
  // const data = async () => {
  //   try {
  //     let donnes = await axios.get('http://localhost:4000/Reservation/ville');
  //     let value = await donnes.data// Access the response data using `donnes.data`
  //     return value
  //    } catch (error) {
  //     console.error(error);
  //   }
  // };

  // console.log(data())
  // useEffect(()=>{
  //     fetch('http://localhost:4000/Reservation/ville')
  //     .then((rest)=> rest.json())
  //     .then((data)=>{
  //           console.log(data)
  //     })
  // },[])
  // const handleError = (err) =>
  //     toast.error(err, {
  //       position: "bottom-left",
  //     });
  //   const handleSuccess = (msg) =>
  //     toast.success(msg, {
  //       position: "bottom-right",
  //     });

  // async function handleSubmit(e){
  //   e.preventDefault();
  //       try {
  //           const {data} = await axios.get('http://localhost:4000/Reservation/addUser')
            
  //           const { success, message } = data;

  //           if (success) {
  //             handleSuccess(message);
  //             setTimeout(() => {
  //               navigate("/");
  //             }, 1000);
  //           }else{
  //             handleError(message);
             
  //           }
  //       } catch (error) {
  //         console.log(error)
  //       }
  //       setInputValue({
  //         ...form,
  //           nom: "",
  //           prenom: "",
  //           email: "",
  //           telephone: "",
  //           villeDepart: "",
  //           villeArrive: "",
  //         });
  // }
  return (
    <>
      <form className="container mt-3 mb-3">
        <Row className="mb-3">
          <Form.Group controlId="formBasicEmail" className="col col-sm-6">
            <Form.Label>Nom</Form.Label>
            <Form.Control
              type="text"
              name="nom"
              value={nom}
              onChange={handleOnChange}
              className="form-control"
            />
          </Form.Group>
          <Form.Group controlId="formBasicEmail" className="col col-sm-6">
            <Form.Label>Prenom</Form.Label>
            <Form.Control
              type="name"
              name="prenom"
              value={prenom}
              onChange={handleOnChange}
              className="form-control"
            />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group controlId="formBasicMobile" className="col col-sm-6">
            <Form.Label>Numero Telephone</Form.Label>
            <InputGroup>
              <InputGroup.Text id="basic-addon1">+91</InputGroup.Text>
              <Form.Control
                aria-label="Mobile Number"
                type="mobile"
                aria-describedby="basic-addon1"
                className="form-control"
                name="telephone"
                value={telephone}
                onChange={handleOnChange}
              />
            </InputGroup>
          </Form.Group>
          <Form.Group controlId="formBasicEmail" className="col col-sm-6">
            <Form.Label>Email</Form.Label>
            <InputGroup>
              <Form.Control
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                type="email"
                name="email"
                value={email}
                onChange={handleOnChange}
              />
              <InputGroup.Text id="basic-addon2">@gmail.com</InputGroup.Text>
            </InputGroup>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group className=" col col-sm-6" controlId="formGridAddress1">
            <Form.Label>Ville Depart</Form.Label>
            <Form.Control
              className="form-control"
              type="text"
              name="address1"
              value={villeDepart}
              onChange={handleOnChange}
            />
          </Form.Group>
      
          <Form.Group controlId="formGridState" className="col col-sm-4">
            <Form.Label>State</Form.Label>
            <Form.Select
              defaultValue="Choose..."
              className="form-control"
              name="a_state"
              value={villeDepart}
              onChange={handleOnChange}
            >
              {/* <option value="Choose...">Choose...</option>
              <option value="Delhi">Delhi</option>
              <option value="Bombay">Bommbay</option>
              <option value="New York">New York</option>
              <option value="Kashmir">Kashmir</option> */}
              data.map()
            </Form.Select>
          </Form.Group>
        </Row>
      
        <Row className="mb-3">
          <Form.Group controlId="formGridCheckbox" className="col col-sm-6">
            <button
              type="submit"
              className="me-4 btn btn-success btn-lg btn-block"
            >
              Submit
            </button>
            <button
              type="reset"
              className="me-4 btn btn-danger btn-lg btn-block"
            >
              Cancel
            </button>
          </Form.Group>
        </Row>
      </form>

    </>
  );
}

export default Reservation;
