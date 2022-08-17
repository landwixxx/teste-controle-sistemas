import { useMain } from "../../Context";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { TableContainer, TableHeader } from "../styles";
import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";

import { Button, IconButton, Tooltip } from "@mui/material";
import { Delete } from "@mui/icons-material";
import { useState } from "react";
import ContactForm from "../Form";

interface Contact {
  id: number,
  name: string;
  number: string;
}

function Table() {
  const { data, deleteContact } = useMain();
  const [open, setOpen] = useState(false);
  const [editData, setEditData] = useState(undefined);

  const handleEdit = (values: any) => {
    setOpen(true);
    setEditData(values);
  };
  const handleClose = () => {
    setOpen(false);
    setEditData(undefined);
  };

  const handleDelete = (contact: Contact | any) => {
    setEditData(contact);   
    deleteContact(contact.id, contact.name, contact.number);
    setEditData(undefined)
  }

  return (
    <TableContainer>
      <TableHeader>
        <h2>Contatos</h2>
        <Button
          variant="contained"
          onClick={() => setOpen(true)}
          style={{ backgroundColor: "black" }}
        >
          Adicionar
        </Button>
      </TableHeader>
      <ContactForm open={open} handleClose={handleClose} editData={editData} />
      <table>
        <TableHead>
          <TableRow>
            <TableCell align="left">Id</TableCell>
            <TableCell align="left">Nome</TableCell>
            <TableCell align="left">Numero</TableCell>
            <TableCell align="right">Ações</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.map((contact: any) => (
            <TableRow key={contact.id}>
              <TableCell align="left">{contact.id}</TableCell>
              <TableCell align="left">{contact.name}</TableCell>
              <TableCell align="left">{contact.number}</TableCell>
              <TableCell align="right">
                <Tooltip title="Editar">
                  <IconButton>
                    <ModeEditOutlineIcon
                      onClick={() => handleEdit(contact)}
                      fontSize="small"
                    />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Deletar">
                  <IconButton>
                    <Delete
                      fontSize="small"
                      onClick={() => {handleDelete(contact)}}
                     />
                  </IconButton>
                </Tooltip>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </table>
    </TableContainer>
  );
}

export default Table;
