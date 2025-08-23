import React from 'react'

export default function CommentTableItem({ comment, fetchComments }) {
  const { blog, createdAt } = comment
  const blogDate = new Date(createdAt)

  return (
    <tr className='border-y border-gray-300'>
      <td className='px-6 py-4'>
        <b className='font-medium text-gray-600'>Blog</b>: {blog.title}
        <br />
        <br />
        <b className='font-medium text-gray-600'>Name</b>: {comment.name}
        <br />
        <b className='font-medium text-gray-600'>Comment</b>: {comment.content}
      </td>

      <td className='px-6 py-4 max-sm:hidden'>
        {blogDate.toLocaleDateString()}
      </td>

      <td className='px-6 py-4 max-sm:hidden'>
        <div className='inline-flex items-center gap-4'>
          {!comment.isApproved ? (
            <img
              src="/tickicon.png"
              alt="approve"
              className="w-5 hover:scale-110 transition-all cursor-pointer"
              onClick={() => {
                console.log("Approved:", comment._id)
                fetchComments()
              }}
            />
          ) : (
            <p className="text-xs border border-green-600 bg-green-100 text-green-600 rounded-full px-3 py-1">
              Approved
            </p>
          )}

          <img
            src="/deleteicon.png"
            alt="delete"
            className="w-5 hover:scale-110 transition-all cursor-pointer"
            onClick={() => {
              console.log("Deleted:", comment._id)
              fetchComments()
            }}
          />
        </div>
      </td>
    </tr>
  )
}
