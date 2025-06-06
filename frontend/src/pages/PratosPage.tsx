import React, { useEffect, useState } from 'react';
import { DataService } from '../services/DataService';
import type { Prato } from '../types';

export default function PratosPage() {
  const [pratos, setPratos] = useState<Prato[]>([]);

  useEffect(() => {
    DataService.getPratos().then(setPratos);
  }, []);

  return (
    <div>
      <h1>Menu / Pratos</h1>
      <table>
        <thead>
          <tr>
            <th>Prato</th>
            <th>Categoria ID</th>
            <th>Tempo (min)</th>
            <th>Preço Base</th>
          </tr>
        </thead>
        <tbody>
          {pratos.map(p => (
            <tr key={p.prato_id}>
              <td>{p.nome}</td>
              <td>{p.categoria_id}</td>
              <td>{p.tempo_preparo}</td>
              <td>{p.preco_base.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
