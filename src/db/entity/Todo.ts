import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Todo {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    text: string
    
    @Column()
    completed: boolean
};
