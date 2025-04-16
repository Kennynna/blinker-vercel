import { useState } from 'react';
import { useStoreNotesAdd } from '@/shared/store/notes-add';

import { FixedButton } from '../community-add-event/shared/fixed-button';
import { InputWithLimit } from '../community-add-event/shared/input-with-limit';

export const NotesAddInput = ({ closeDrawer }: { closeDrawer: () => void }) => {
  const { notesValue, setNewNoteValue } = useStoreNotesAdd();
  const [inputValue, setInputValue] = useState(notesValue);
  const [showLimit, setShowLimit] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.trim() === '') {
      setInputValue('');
      return;
    }
    if (e.target.value.length > 100) {
      return;
    }
    setInputValue(e.target.value);
  };

  function addNewNote() {
    if (inputValue.trim() === '') {
      return;
    }
    setNewNoteValue(inputValue);
    closeDrawer();
  }

  return (
    <div style={{ marginTop: '16px' }}>
      <InputWithLimit
        type={'text'}
        value={inputValue}
        onChange={handleChange}
        limit={100}
        inputTitle="Ваше имя"
        placeholder="Иванов Иван Иванович"
        show={showLimit}
        strong={false}
        onFocus={() => setShowLimit(true)}
        onBlur={() => setShowLimit(false)}
      />

      <FixedButton disabled={!inputValue} onClick={addNewNote}>
        Сохранить
      </FixedButton>
    </div>
  );
};
