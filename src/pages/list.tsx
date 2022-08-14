import Head from 'next/head';
import { List } from '../templates/List';
import { MenuLinkProps } from '../components/MenuLink';
import { loadList, loadListQuery } from '../services/loadList';
import { useEffect, useState } from 'react';
import { Logout } from '@styled-icons/material-outlined';
import { signOut } from '../contexts/AuthContext';
import { canSSRAuth } from '../utils/canSSRAuth';

export type ListIndexProps = {
  breed?: string;
  list: string[];
};

export default function Index() {
  const [breed, setBreed] = useState<string>('');
  const [list, setList] = useState<string[]>([]);

  const handleChange = async (params: string) => {
    const data = await loadListQuery(params);
    if (data) {
      setList(data.list);
      setBreed(data.breed);
    }
  };

  const ListMenuProps = [
    {
      id: '1',
      children: 'chihuahua',
      link: 'chihuahua',
      newTab: false,
      onClick: handleChange,
    },
    {
      id: '2',
      children: 'husky',
      link: 'husky',
      newTab: false,
      onClick: handleChange,
    },
    {
      id: '3',
      children: 'pug',
      link: 'pug',
      newTab: false,
      onClick: handleChange,
    },
    {
      id: '4',
      children: 'labrador',
      link: 'labrador',
      newTab: false,
      onClick: handleChange,
    },
    {
      id: '5',
      children: <Logout />,
      newTab: false,
      onClick: signOut,
    },
  ] as MenuLinkProps[];

  useEffect(() => {
    async function fetchData() {
      await canSSRAuth();
      const data = await loadList();
      if (data) {
        setList(data.list);
        setBreed(data.breed);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      <Head>
        <title>{breed}</title>
      </Head>
      <List links={ListMenuProps} list={list} />
    </>
  );
}
