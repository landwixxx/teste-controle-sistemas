import { createContext, useContext, useEffect, useState } from "react";
import * as Services from "../Services";

const MainContext = createContext({});
interface Body {
  id: number;
  name: string;
  number: string;
}
const useMain = () => useContext(MainContext) as any;

const MainProvider = ({ children }: any) => {
  const [data, setData] = useState<any>();

  const getContacts = async () => {
    const response = await Services.List();
    const data = await response.json();
    console.log(data)
    setData(data);
  };

  const createContact = async (body: Body) => {
    try {
      await Services.Create(body);
    } catch (e) {
      console.log(e);
    }
    getContacts();
  };
  
  const editContact = async (body: Body, id: number) => {
    try {
      console.log(body)
      await Services.Edit(body);
    } catch (e) {
      console.log(e);
    }
    getContacts();
  };

  const deleteContact = async (id: number, name: string, number: string) => {
    const body : Body = {id, name, number}
    try {
      Services.Delete(body);
      await getContacts();
    } catch (e) {
      console.log(e);
    }
    getContacts();
  };

  useEffect(() => {
    getContacts();
  }, []);

  return (
    <MainContext.Provider
      value={{ data, createContact, editContact, deleteContact }}
    >
      {children}
    </MainContext.Provider>
  );
};

export { MainProvider, useMain };
