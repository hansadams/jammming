import React, { useCallback } from "react";

const Track = (props) => {
  const addTrack = useCallback(
    (event) => {
      props.onAdd(props.track);
    },
    [props]
  );

  const removeTrack = useCallback(
    (event) => {
      props.onRemove(props.track);
    },
    [props]
  );

  const renderAction = () => {
    if (props.isRemoval) {
      return (
        <button className="Track-action" onClick={removeTrack}>
          -
        </button>
      );
    }
    return (
      <button className="Track-action" onClick={addTrack}>
        +
      </button>
    );
  };

  return (
    <ul className="divide-y divide-gray-100">
      <li key={props.key} className="flex justify-between gap-x-2 p-3 my-2 bg-zinc-950 rounded-xl hover:bg-zinc-700">
        <div className="flex min-w-0 gap-x-4 ">
          <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src={props.track.imageUrl} alt="" />
          <div className="min-w-0 flex-auto">
            <p className="text-sm font-semibold leading-6 text-white">{props.track.name}</p>
            <p className=" truncate text-xs leading-5 text-zinc-400">{props.track.artist}</p>
          </div>
        </div>
        <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
          <p className="text-sm leading-6 text-gray-900">{props.role}</p>
          {renderAction()}
        </div>
      </li>
    </ul>
  );
};

export default Track;
