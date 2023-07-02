import React, { useEffect, useState } from 'react';
import Cards from '../../Components/Card/Card';
import Header from '../../Components/Header/Header';
import TodoCard from '../../Components/TodoCard/TodoCard';
import { HomePage } from './HomeStyle';
import CardAdder from '../../Components/CardAdder/CardAdder';
import TaskList from '../../Data/task.json';
import CardAdderOption from '../../Components/CardAdderOption/CardAdderOption';

interface ItemProps {
  id: string;
  task: string;
  description: string;
  status: string;
  start: Date;
  end: Date;
}

const Home = () => {
  // for maintaining in local storage
  const [TaskLists, setTaskList] = useState<ItemProps[]>(
    localStorage.getItem('task') === null
      ? TaskList
      : JSON.parse(localStorage.getItem('task') || '[]')
  );

  const [adding, setadd] = useState('');
  const [dragId, setId] = useState('');
  const [droptype, settype] = useState('');

  // after every update to the data save it in local storage
  const fixdata = () => {
    window.localStorage.setItem('task', JSON.stringify(TaskLists));
  };

  //  for windows notification
  const Notify = () => {
    TaskLists.map((task) => {
      if (task.status !== 'Completed' && new Date(task.end) < new Date()) {
        const notification = new Notification(
          'New Message from Todo Application',
          {
            body: 'The ' + task.task + ' crossed the due time',
          }
        );
      }
      return '';
    });
  };

  useEffect(() => {
    if (localStorage.getItem('task') === null) {
      window.localStorage.setItem('task', JSON.stringify(TaskLists));
    }
    if (Notification.permission === 'granted') {
      Notify();
    } else if (Notification.permission !== 'denied') {
      Notification.requestPermission().then((permission) => {
        if (permission === 'granted') {
          Notify();
        }
      });
    }
  });

  // for saving new task
  const savedata = (updatevalue: ItemProps) => {
    setadd('');
    setTaskList(TaskLists.concat(updatevalue));
    fixdata();
  };

  // for updating the task
  const updateData = (id: string, updatevalue: ItemProps) => {
    setadd(adding === '' ? updatevalue.status : '');
    TaskLists.map((task, index) => {
      if (task.id === id) {
        let newtasklist = TaskLists;
        newtasklist[index] = updatevalue;
        setTaskList(newtasklist);
        fixdata();
      }
      return '';
    });
  };

  // method for drag
  const drag = (type: string, id: string) => {
    setId(id);
    settype(type);
  };

  // method for drop
  const drop = (status: string) => {
    if (droptype !== status) {
      TaskLists.map((task, index) => {
        if (task.id === dragId) {
          let newtasklist = TaskLists;
          newtasklist[index].status = status;
          setTaskList(newtasklist);
          setadd(adding === '' ? status : '');
          fixdata();
        }
        return '';
      });
    }
    setadd('');
    setadd(status);
  };

  // for rendering task that are open
  const opentask = TaskLists.map((task) => {
    if (task.status === 'Open') {
      return (
        <Cards
          key={task.id}
          data={task}
          id={task.id}
          type={task.status}
          description={task.description}
          due={JSON.stringify(task.end)}
          drag={drag}
          update={updateData}
        >
          {task.task}
        </Cards>
      );
    } else {
      return '';
    }
  });

  // for rendering task that are in progress
  const progresstask = TaskLists.map((task) => {
    if (task.status === 'In Progress') {
      return (
        <Cards
          key={task.id}
          data={task}
          id={task.id}
          type={task.status}
          description={task.description}
          due={JSON.stringify(task.end)}
          drag={drag}
          update={updateData}
        >
          {task.task}
        </Cards>
      );
    } else {
      return '';
    }
  });

  // for rendering task that are completed
  const closetask = TaskLists.map((task) => {
    if (task.status === 'Completed') {
      return (
        <Cards
          key={task.id}
          data={task}
          id={task.id}
          type={task.status}
          description={task.description}
          due={JSON.stringify(task.end)}
          drag={drag}
          update={updateData}
        >
          {task.task}
        </Cards>
      );
    } else {
      return '';
    }
  });

  return (
    <HomePage>
      <TodoCard type="Open" handler={drop}>
        <Header type="open" handler={() => setadd('open')}></Header>
        {opentask}
        {adding === 'open' ? (
          <CardAdderOption
            edit={false}
            value="Open"
            savedata={savedata}
            exit={() => setadd('')}
          ></CardAdderOption>
        ) : (
          <CardAdder handler={() => setadd('open')}></CardAdder>
        )}
      </TodoCard>
      <TodoCard type="In Progress" handler={drop}>
        <Header type="in progress" handler={() => setadd('progress')}></Header>
        {progresstask}
        {adding === 'progress' ? (
          <CardAdderOption
            edit={false}
            value="In Progress"
            savedata={savedata}
            exit={() => setadd('')}
          ></CardAdderOption>
        ) : (
          <CardAdder handler={() => setadd('progress')}></CardAdder>
        )}{' '}
      </TodoCard>
      <TodoCard type="Completed" handler={drop}>
        <Header type="completed" handler={() => setadd('completed')}></Header>
        {closetask}
        {adding === 'completed' ? (
          <CardAdderOption
            edit={false}
            exit={() => setadd('')}
            value="Completed"
            savedata={savedata}
          ></CardAdderOption>
        ) : (
          <CardAdder handler={() => setadd('completed')}></CardAdder>
        )}{' '}
      </TodoCard>
    </HomePage>
  );
};

export default Home;
