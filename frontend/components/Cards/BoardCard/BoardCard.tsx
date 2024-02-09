'use client'

import { CardData, CardProps } from "./types"

import classNames from "classnames";
import { Button } from "@/components";
import styles from './BoardCard.module.scss'

export function BoardCard({ data, isDeleted }: CardProps) {
  function handleDeleteClick (event : any) {
    event.stopPropagation();
    event.preventDefault()
    // DeleteData(data.id)
    // api delete
    isDeleted()
  }

  function handleEditClick (event: any) {
    event.stopPropagation();
    event.preventDefault()
    // navigate(`/contacts/edit/${data.id}`);
  }

  return (
    <li className={styles['user-card__wrapper']}>
    <div>
      <h3>Name: {data.title}</h3>
    </div>
    <div className={[styles['user-card__service-wrapper']]}>
      <Button type='button' onClick={(event: any) => handleDeleteClick(event)}>
        Delete
      </Button>
      <Button type='button' onClick={(event : any) => handleEditClick(event)}>
        Edit
      </Button>
    </div>
  </li>
  )
}
