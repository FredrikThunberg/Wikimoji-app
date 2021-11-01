import React from "react";
import Entry from "./Entry";

function createEntry(emojiTerm) {
  return (
    <Entry
      key={emojiTerm.id}
      emoji={emojiTerm.emoji}
      link={emojiTerm.link}
      name={emojiTerm.name}
      description={emojiTerm.meaning}
    />
  );
}

export default createEntry;
