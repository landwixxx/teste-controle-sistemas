import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Button, IconButton, TextField } from "@mui/material";
import { CustomDialog } from "../styles";
import { useEffect, useState } from "react";
import { useMain } from "../../Context";

function ContactForm({ open, handleClose, editData }: any) {
  const [formData, setFormData] = useState({ name: "", number: "" });
  const { createContact, editContact } = useMain();
  const handleSubmit = (event: any) => {
    event.preventDefault();
    if (editData) {
      editContact({ ...formData }, editData.id);
    } else {
      createContact({ ...formData });
    }
    handleClose(false);
  };

  useEffect(() => {
    if (editData) {
      setFormData({
        ...editData,
        number: editData.number,
        name: editData.name,
      });
    }
  }, [editData]);

  return (
    <CustomDialog open={open} onClose={() => handleClose()}>
      <form onSubmit={handleSubmit}>
        <DialogTitle>{editData ? "Editar" : "Criar"} Contato</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            id="name"
            label="Nome"
            fullWidth
            value={formData.name}
            variant="standard"
            required
            onChange={(event) =>
              setFormData({ ...formData, name: event.target.value })
            }
          />
          <TextField
            autoFocus
            id="name"
            value={formData.number}
            label="Número"
            fullWidth
            type="number"
            required
            variant="standard"
            onChange={(event) =>
              setFormData({ ...formData, number: event.target.value })
            }
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleClose()}>Cancelar</Button>
          <Button variant="contained" type="submit">
            Salvar
          </Button>
        </DialogActions>
      </form>
    </CustomDialog>
  );
}

export default ContactForm;
