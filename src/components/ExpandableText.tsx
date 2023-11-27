import React, { useState } from 'react'

interface Props {
  children: string;
  maxWords?: number;
}

const ExpandableText = ({children, maxWords = 50}: Props) => {
  const [expanded, setExpanded] = useState(false)
  
  if (children.length <= maxWords) return <p>{children}</p>;
  const text = expanded ? children : children.substring(0, maxWords);
  return (
    <p>{text}...<button onClick={() => setExpanded(!expanded)}>{expanded ? 'less' : 'more'}</button></p>
  )
}

export default ExpandableText