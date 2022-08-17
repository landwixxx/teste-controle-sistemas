interface Body {
  id: number;
  name: string;
  number: string;
}

export const List = async () =>
  fetch("http://localhost:3000/contatos", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

export const Create = async (body: any) =>
  fetch("http://localhost:3000/contatos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

export const Edit = async (body: any) =>
  fetch(`http://localhost:3000/contatos`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  export const Delete = async (body: Body) =>{
    const id = body.id;
  fetch(`http://localhost:3000/contatos/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({id : id}),
  })};

