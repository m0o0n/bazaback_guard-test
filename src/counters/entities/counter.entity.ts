import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'Counters' })
export class Counter {
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ description: 'counter of live projects' })
  @Column()
  liveProject: number;

  @ApiProperty({ description: 'counter of members' })
  @Column()
  members: number;

  @ApiProperty({ description: 'counter of empoyed members' })
  @Column()
  employed: number;

  @ApiProperty({ description: 'counter of technologies' })
  @Column()
  technologies: number;

  @ApiProperty({ description: 'counter of used libraries' })
  @Column()
  libraries: number;
}
