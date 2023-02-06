import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Tasks } from './tasks.entity';
import { TaskRepository } from './tasks.repository';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(TaskRepository)
    private taskRepository: TaskRepository,
  ) {}

  // private tasks: Task[] = [];
  // getAllTasks(): Task[] {
  //   return this.tasks;
  // }

  async getTaskById(id: number): Promise<Tasks> {
    const found = await this.taskRepository.findOneBy({ id });

    if (!found) {
      throw new NotFoundException(`Task with id "${id}" no found`);
    }

    return found;
  }

  // deleteTask(id: string): void {
  //   const found = this.getTaskById(id);
  //   if (!found) {
  //     throw new NotFoundException(`Task with id "${id}" no found`);
  //   }
  //   this.tasks = this.tasks.filter((task) => task.id !== id);
  // }
  // createTask(createTaskDto: CreateTaskDto) {
  //   const { title, description } = createTaskDto;
  //   const task: Task = {
  //     id: uuidv1(),
  //     title,
  //     description,
  //     status: TaskStatus.OPEN,
  //   };
  //   this.tasks.push(task);
  //   return task;
  // }
  // updateTaskStatus(id: string, status: TaskStatus): Task {
  //   const task = this.getTaskById(id);
  //   task.status = status;
  //   return task;
  // }
  // getTasksWithFilters(filterDto: GetTaskFilterDto): Task[] {
  //   const { search, status } = filterDto;
  //   let tasks = this.getAllTasks();
  //   if (status) {
  //     tasks = tasks.filter((task) => task.status === status);
  //   }
  //   if (search) {
  //     tasks = tasks.filter(
  //       (task) => task.title === search || task.description === search,
  //     );
  //   }
  //   return tasks;
  // }
}
