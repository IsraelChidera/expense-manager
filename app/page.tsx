
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

export default function Home() {

  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(6);
  const [total, setTotal] = useState(0);



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

  return (
    <main>
      <div className="mt-[40px] overflow-x-auto">
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
    </main>
  );
}
