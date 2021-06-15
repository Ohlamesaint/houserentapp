import React, { useEffect } from 'react'
import { Button, Modal, Table } from 'react-bootstrap';
import axios from 'axios'


function MyVerticallyCenteredModal(props) {
  console.log({ ...props });
  const [queryResult, setQueryResult] = React.useState([{}]);

  useEffect(() => {
    if (props.show == false) {
      return;
    }
    const query = async () => {
      const sql = props.sql.replace(/\n/g, ' ');
      const res = await axios({
        method: 'POST',
        url: 'http://localhost:8000/',
        headers: {
          'Content-Type': 'application/json; charset=UTF-8'
        },
        data: { sql }
      })
      setQueryResult(res.data);
      console.log(queryResult);
    };
    query();
  }, [props.show]);

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          搜尋結果
          </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>          
          {queryResult[0]?
            <Table responsive>
              <thead>
                <tr>
                  <th>#</th>
                  {Array.from({ length: Object.keys(queryResult[0]).length }).map((_, index) => (
                    <th key={index}>{Object.keys(queryResult[0])[index]}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {Array.from({ length: queryResult.length }).map((_, indexRow) => (
                  <tr>
                    <td>{indexRow}</td>
                    {Array.from({ length: Object.keys(queryResult[0]).length }).map((_, indexColumn) => (
                      <td key={indexColumn}>{Object.values(queryResult[indexRow])[indexColumn]}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </Table>
            : ""}
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}



function ModalButton(props) {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button type="button" style={{ margin: "5px"}} class="btn btn-secondary" variant="secondary" onClick={() => { setModalShow(true); }}>
        {props.name}
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        sql={props.sql}
      />
    </>
  );
}


export { ModalButton as default }
