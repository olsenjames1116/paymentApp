import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 50, unique: true })
  username: string;

  @Column({ type: 'text', nullable: true })
  pic: string;

  @Column({ type: 'text' })
  password: string;

  @Column('decimal', {
    precision: 6,
    scale: 2,
    default: 1000.0,
  })
  balance: number;
}
