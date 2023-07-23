import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAlbums } from "../utilities/albumsSlice";
import { Card } from "./Card";
import { ALBUMS_API_ENDPOINT } from "../constants/albums-constant";
import SearchBar from "./SearchBar";


const Main = () => {
  const dispath = useDispatch();
  const albums = useSelector((store) => store.albums.items);

  const [albumsByUserId, setAlbumsByUserId] = useState({});
  const [searchQuery, setSearchQuery] = useState('');
  

  const fetchAlbums = async () => {
    const res = await fetch(ALBUMS_API_ENDPOINT);
    const data = await res.json();
    dispath(setAlbums(data));
    return data;
  };


  const grpAlbumsById = () => {
    const obj = {};
    albums.forEach((element) => {
      if (!obj[element.userId]) {
        obj[element.userId] = [];
      }
      obj[element.userId].push(element);
    });
    setAlbumsByUserId(obj);
  };


  useEffect(() => {
    fetchAlbums();
  }, []);


  useEffect(() => {
    grpAlbumsById();
  },[albums]);

  const handleSearch = (payload) => {
    setSearchQuery(payload);
  }


  return (
    <>
    <div className="header h-16 w-auto bg-slate-600 p-4 mb-4 flex items-center justify-between">
      <span className="text-white">logo</span>
      <SearchBar searchQuery={searchQuery} handleSearch={handleSearch}></SearchBar>
    </div>
    {albumsByUserId && (
      <div className="flex flex-row flex-wrap">
        {Object.entries(albumsByUserId).map(([key, value]) =>
          <Card key={key} userId={key} count={value.length}></Card>
        )}
      </div>
    )}
    </>
  );
};

export default Main;
