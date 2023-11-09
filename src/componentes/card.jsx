"use client"
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import {useState } from 'react';

export default function Card({titulo, nota}){
    const [salvar, setSalvo] = useState(true)
    
    function salvar(){
        setSalvo(true)
    }

    function naosalvar(){
        setSalvo(false)
    }
    return(
        <div className="flex flex-col items-center w-48">
           {
            salvo ?
            <BookmarkIcon onClick={naosalvar} className=" text-grey-800 curso-pointer absolute top-2 right-2" /> : 
            <BookmarkBorderIcon onClick={salvar}className="absolute top-2 right-2" /> 
           }
            <img className="rounded"src="" ></img>
            <span className="text-lg font-bold uppercase line-clamp-1">{titulo}</span>
            <div>
                <i></i>
                <span>{nota}</span>
            </div>
            <a className="bg-cyan-800 text-gray-200" href="">detalhes</a>
        </div>
    )
}