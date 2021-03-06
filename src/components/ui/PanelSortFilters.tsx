import React, { FC, useMemo } from 'react';
import { observer } from 'mobx-react-lite';
import cn from 'classnames'
import { SortType } from 'types';
import { getListActionsForBarFilters } from 'helpers';
import { useAuth } from '@/contexts/AuthContext';
import { MoviesState } from '@/store';

interface PanelSortFiltersProps {
  type?: 'default' | 'gray',
  notIncluded?: SortType
  classContainer?: string
}

const PanelSortFilters: FC<PanelSortFiltersProps> = ({ type = 'default', notIncluded, classContainer }) => {
  const { filter } = MoviesState
  const { user } = useAuth()
  const data = useMemo(
    () => getListActionsForBarFilters(filter, user, notIncluded),
    [user, filter, notIncluded],
  )

  const activeClassName = cn({
    '!text-primary-light pointer-events-none': type === 'default',
    '!text-black pointer-events-none': type === 'gray',
  })

  const className = cn({
    'text-white': type === 'default',
    'bg-gray-200 rounded-md p-1 text-gray-400 drop-shadow-md': type === 'gray',
  })

  return (
    <ul className={`flex flex-center space-x-4 text-xs sm:text-sm ${classContainer || ''}`}>
      {data.map((item) => (
        <li key={item.title}>
          <button
            type="button"
            onClick={item.action}
            className={`${className} ${item.isActive ? activeClassName : ''}`}
          >
            {item.title}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default observer(PanelSortFilters);
