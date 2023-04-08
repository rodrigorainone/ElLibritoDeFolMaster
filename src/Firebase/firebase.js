
import { initializeApp } from "firebase/app";
import {getFirestore, collection,doc,addDoc,getDoc,getDocs,updateDoc,deleteDoc} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDCvixqd0XZzetnhqDUTb2xO0olKkybfRM",
  authDomain: "ellibrito-4dc1f.firebaseapp.com",
  projectId: "ellibrito-4dc1f",
  storageBucket: "ellibrito-4dc1f.appspot.com",
  messagingSenderId: "987003471417",
  appId: "1:987003471417:web:e3241609ae025ca1b26fe8"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore()

export const cargarBDD = async () =>{
  const promise = await fetch('./json/Coh1vs1.json')
  const productos = await promise.json()
  productos.forEach(async (element) => {
      await addDoc(collection(db,"Coh1vs1"),{
        nombre:element.nombre,
        img:element.img,
        PJ:element.PJ,        
        PG:element.PG,
        PE:element.PE,
        PP:element.PP,       
        Pts:element.Pts
      })
  });
}
export const cargarBDD2 = async () =>{
    const promise = await fetch('./json/Coh2vs2.json')
    const productos = await promise.json()
    productos.forEach(async (element) => {
        await addDoc(collection(db,"Coh2vs2"),{
          nombre:element.nombre,
          img:element.img,
          PJ:element.PJ,        
          PG:element.PG,
          PE:element.PE,
          PP:element.PP,       
          Pts:element.Pts
        })
    });
  }

  export const cargarBDD3 = async () =>{
    const promise = await fetch('./json/Coh3vs3.json')
    const productos = await promise.json()
    productos.forEach(async (element) => {
        await addDoc(collection(db,"Coh3vs3"),{
          nombre:element.nombre,
          img:element.img,
          PJ:element.PJ,        
          PG:element.PG,
          PE:element.PE,
          PP:element.PP,       
          Pts:element.Pts
        })
    });
  } 

  export const cargarBDD4 = async () =>{
    const promise = await fetch('./json/Coh4vs4.json')
    const productos = await promise.json()
    productos.forEach(async (element) => {
        await addDoc(collection(db,"Coh4vs4"),{
          nombre:element.nombre,
          img:element.img,
          PJ:element.PJ,        
          PG:element.PG,
          PE:element.PE,
          PP:element.PP,       
          Pts:element.Pts
        })
    });
  } 

  export const cargarBDDCatan = async () =>{
    const promise = await fetch('./json/Catan.json')
    const productos = await promise.json()
    productos.forEach(async (element) => {
        await addDoc(collection(db,"Catan"),{
          nombre:element.nombre,
          img:element.img,
          PJ:element.PJ,        
          PG:element.PG,
          PE:element.PE,
          PP:element.PP,       
          Pts:element.Pts
        })
    });
  } 

  export const cargarBDDTerra = async () =>{
    const promise = await fetch('./json/Terraforming.json')
    const productos = await promise.json()
    productos.forEach(async (element) => {
        await addDoc(collection(db,"Terraforming"),{
          nombre:element.nombre,
          img:element.img,
          PJ:element.PJ,        
          PG:element.PG,
          PE:element.PE,
          PP:element.PP,       
          Pts:element.Pts
        })
    });
  } 

  export const cargarBDDFifa = async () =>{
    const promise = await fetch('./json/Fifa.json')
    const productos = await promise.json()
    productos.forEach(async (element) => {
        await addDoc(collection(db,"Fifa"),{
          nombre:element.nombre,
          img:element.img,
          PJ:element.PJ,        
          PG:element.PG,
          PE:element.PE,
          PP:element.PP,  
          GF:element.GF,
          GC:element.GC,   
          Dif:element.Dif,    
          Pts:element.Pts
        })
    });
  } 

export const getProductos = async(aux) => {

  const productos = await getDocs(collection(db,aux))

  const items = productos.docs.map(prod => {

    return {...prod.data(), id: prod.id}

})

 return items

}

export const getProducto = async(id,aux) =>{
    const producto = await getDoc(doc(db,aux,id))
    const item = {...producto.data(), id: producto.id}
    return item
}

export const updateProducto = async(id, info,aux) => {
  await updateDoc(doc(db, aux, id), info)
}

export const deleteProducto = async(id) => {
  await deleteDoc(doc(db, "productos", id))
}

export const createOrdenCompra = async(cliente, productos,precioTotal, fecha) => {
  const ordenCompra = await addDoc(collection(db, "ordenCompra"), {
      datosCliente: cliente,
      productos: productos,
      precioTotal: precioTotal, 
      fecha: fecha
  })
  return ordenCompra
}

export const agregarPlayer = async(nombre,aux) => {
  const nuevoPlayer = await addDoc(collection(db, aux), {
    "nombre":nombre,
    "img":"./img/bandera polonia.png",
    "PJ":0,
    "PG":0,
    "PE":0,
    "PP":0,
    "Pts":0
  })
  return nuevoPlayer
}


export const getOrdenCompra = async(id) => {
  const ordenCompra = await getDoc(doc(db, "ordenCompra", id))
  const oCompra = {...ordenCompra.data(), id: ordenCompra.id}
  return oCompra
}