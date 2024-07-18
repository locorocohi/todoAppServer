import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity('Todos')
export class Todo {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    text: string
    
    @Column()
    completed: boolean
};
