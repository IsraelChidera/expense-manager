
"use client"

import axios from 'axios';
import { useEffect, useState } from 'react';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import TablePagination from '@mui/material/TablePagination';
import Image from 'next/image';
import SubscribeForm from '@/components/SusbscribeForm';

export default function Home() {

  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(6);
  const [total, setTotal] = useState(0);
  const [photos, setPhotos] = useState([]);



  const getPosts = async (page: number) => {
    try {
      const response = await axios.get(`https://reqres.in/api/unknown?page=${page}`);
      console.log("Res", response.data);
      setPosts(response.data.data);
      // setPage(response?.data.page);
      setTotal(response.data.total);
      setRowsPerPage(response?.data.per_page);
    } catch (error: any) {
      console.log(error);
    }
  }

  const getPhotos = async () => {
    try {
      const response = await axios.get(`https://reqres.in/api/users?page=2`);
      console.log("res", response.data.data);
      setPhotos(response.data.data);
    } catch (error: any) {

    }
  }

  const handleChangePage = (event: any, newPage: any) => {
    setPage(newPage);
    getPosts(newPage + 1);
  };


  const handleChangeRowsPerPage = (event: any) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(1);
  };


  console.log(page, rowsPerPage);

  useEffect(() => {
    getPosts(page);
  }, [rowsPerPage])

  useEffect(() => {
    getPhotos();
  }, [])

  return (
    <main>
      <SubscribeForm />
      <div className="hidden mt-[40px] overflow-x-auto">
        <table className="w-full mt-[24px]">
          <thead className="bg-[#EEEEEE] py-4">
            <tr className=" w-full">
              <th className="p-4 text-left uppercase text-xs font-semibold ">
                S/N
              </th>

              <th className="p-4 text-left uppercase text-xs font-semibold ">
                Last Name
              </th>

              <th className="p-4 text-left uppercase text-xs font-semibold ">
                Middle Name
              </th>

              <th className="p-4 text-left uppercase text-xs font-semibold ">
                First Name
              </th>

            </tr>
          </thead>

          <tbody className="text-[#1A1A1A]">
            {
              posts.map((post: any) => (
                <tr
                  key={post.id}
                  className="border-t border-t-[#E5E7EB] py-4 w-full border-b border-b-[#D9D9D9]"
                >
                  <td className="p-4 text-left text-sm font-normal ">
                    {post.name}
                  </td>

                  <td className="p-4 text-left text-sm font-normal ">
                    {post.year}
                  </td>

                  <td className="p-4 text-left text-sm font-normal ">
                    {post.color}
                  </td>

                  <td className="p-4 text-left text-sm font-normal ">
                    {post.pantone_value}
                  </td>
                </tr>
              ))
            }

          </tbody>
        </table>

        <div className='flex justify-between'>
          <TablePagination
            component="div"
            count={total}
            page={page}
            onPageChange={handleChangePage}
            rowsPerPage={rowsPerPage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />

        </div>
      </div>

      <h1 className='text-[36px] pt-20 mb-4 px-10 font-medium'>Authors</h1>
      <div className="px-10 grid lg:grid-cols-5 grid-cols-3 gap-6">
        {
          photos.map((photo: any) => (
            <div key={photo?.id} className='rounded-lg bg-[#efefef] p-3 '>
              <div className='flex justify-center'>
                <Image
                  className='rounded-lg blur-sm hover:blur-0 transition ease-in'
                  src={photo?.avatar}
                  alt={photo?.last_name}
                  width={350}
                  height={350}
                  placeholder='blur'
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNcea26FAAGmwJxzoZWNAAAAABJRU5ErkJggg=="
                />
              </div>
              <p className='mt-4 lg:text-[22px] text-lg'>
                {photo?.first_name} {photo?.last_name}
              </p>
              <p className='mt-1 text-sm lg:text-base'>

              </p>
            </div>
          ))
        }
      </div>
    </main>
  );
}
