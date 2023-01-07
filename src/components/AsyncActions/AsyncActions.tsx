import React, { memo } from 'react';
import { useEffect } from 'react';
import shallow from 'zustand/shallow';
import { useAsyncActionsStore } from './asyncActionsStore';
import './AsyncActions.css';

let userRenderedTimes = 0;

const User: React.FC<{
    name: string;
    onClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}> = ({ name, onClick }) => {
    userRenderedTimes++;

    return (
        // eslint-disable-next-line jsx-a11y/click-events-have-key-events
        <div role="button" className="Common UserContainer" onClick={onClick} tabIndex={0}>
            <div>{name}</div>
        </div>
    );
};

const MemoizedUser = memo(User, (prevProps, nextProps) => {
    return prevProps.name === nextProps.name;
});

const AsyncActions = () => {
    const { data, loading, error } = useAsyncActionsStore(
        (state) => ({ data: state.data, loading: state.loading, error: state.error }),
        shallow,
    );

    useEffect(() => {
        useAsyncActionsStore.getState().fetchData();
    }, []);

    const onClick = (id: number) => (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        event.stopPropagation();
        useAsyncActionsStore.getState().updateUser(id);
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{JSON.stringify(error)}</div>;
    }

    return (
        <div
            role="button"
            className="Common AsyncContainer"
            onClick={(event) => {
                event.stopPropagation();
            }}
            onKeyDown={(event) => event.stopPropagation()}
            tabIndex={0}
        >
            <div>Users rendered {userRenderedTimes} times</div>
            {data.map((user) => {
                return <MemoizedUser key={user.id} name={user.name} onClick={onClick(user.id)} />;
            })}
        </div>
    );
};

export const MemoizedAsyncActions = memo(AsyncActions, () => true);
