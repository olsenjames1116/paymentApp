import { Friendship } from '../friendship/friendship.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

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

  @OneToMany(() => Friendship, (friendship) => friendship.user1_id)
  @Column({ nullable: true })
  friendships: Friendship[];
}
