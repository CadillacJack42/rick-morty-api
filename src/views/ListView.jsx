import React, { useState } from 'react';

export default function ListView() {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);

  return <>{loading ? <h3>Loading...</h3> : <h3>List view</h3>}</>;
}
