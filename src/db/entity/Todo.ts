import { Entity, PrimaryColumn, Column } from "typeorm"

@Entity('todos')
export class Todo {
    @PrimaryColumn()
    id: number

    @Column()
    text: string
    
    @Column()
    completed: boolean
}
