import { User } from '../users/user.entity';
import { Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Friendship {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.friendships)
  user1_id: number;

  @ManyToOne(() => User, (user) => user.id)
  user2_id: number;
}
