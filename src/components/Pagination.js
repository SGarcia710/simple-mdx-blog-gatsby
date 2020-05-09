import React from "react"
import { PaginationWrapper, PaginationElement } from "../elements"

export const Pagination = ({ isFirst, isLast, prevPage, nextPage }) => {
  return (
    <PaginationWrapper isFirst={isFirst} isLast={isLast}>
      <PaginationElement to={prevPage}>Previous page</PaginationElement>
      <PaginationElement to={nextPage}>Next page</PaginationElement>
    </PaginationWrapper>
  )
}
