import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/auth';

import Header from '../../components/Header';
import Title from '../../components/Title';
import { FiEdit2, FiMessageSquare, FiPlus, FiSearch } from 'react-icons/fi';

import { Link } from 'react-router-dom';

import './dashboard.css';

export default function Dashboard() {
  const { logout } = useContext(AuthContext);

  async function handleLogout() {
    await logout();
  }

  return (
    <div>
      <Header />

      <div className="content">
        <Title name="Tickets">
          <FiMessageSquare size={25} />
        </Title>

        <>
          <Link to="/new" className="new">
            <FiPlus color="#FFF" size={25} />
            Novo chamado
          </Link>

          <table>
            <thead>
              <tr>
                <th scope="col">Cliente</th>
                <th scope="col">Assunto</th>
                <th scope="col">Status</th>
                <th scope="col">Cadastrado em</th>
                <th scope="col">#</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td data-label="Cliente">Mercado esquina</td>
                <td data-label="Assunto">Suporte</td>
                <td data-label="Status">
                  <span className="badge" style={{ backgroundColor: '#999' }}>
                    Em Aberto
                  </span>
                </td>
                <td data-label="Cadastrado">12/05/2022</td>
                <td data-label="#">
                  <button
                    className="action"
                    style={{ backgroundColor: '#3583f6' }}
                  >
                    <FiSearch color="#FFF" size={17} />
                  </button>
                  <button
                    className="action"
                    style={{ backgroundColor: '#F6A935' }}
                  >
                    <FiEdit2 color="#FFF" size={17} />
                  </button>
                </td>
              </tr>

              <tr>
                <td data-label="Cliente">Mercado esquina</td>
                <td data-label="Assunto">Suporte</td>
                <td data-label="Status">
                  <span className="badge" style={{ backgroundColor: '#999' }}>
                    Em Aberto
                  </span>
                </td>
                <td data-label="Cadastrado">12/05/2022</td>
                <td data-label="#">
                  <button
                    className="action"
                    style={{ backgroundColor: '#3583f6' }}
                  >
                    <FiSearch color="#FFF" size={17} />
                  </button>
                  <button
                    className="action"
                    style={{ backgroundColor: '#F6A935' }}
                  >
                    <FiEdit2 color="#FFF" size={17} />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </>
      </div>
    </div>
  );
}
