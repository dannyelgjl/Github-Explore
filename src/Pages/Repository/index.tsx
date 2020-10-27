import React, { useEffect, useState } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';

import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

import githubImage from '../../assets/logo-github.svg';

import api from '../../services/api';

import { Header, RepositoryInfo, Issues } from './styles';

interface RepositoryParams {
  repository: string;
}

interface IRepository {
  full_name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  owner: {
    login: string;
    avatar_url: string;
  }
}

interface issue {
  id: number;
  title: string;
  html_url: string;
  user: {
    login: string;
  }
}

const Repository: React.FC = () => {
  const [repository, setRepository] = useState<IRepository | null>(null);
  const [issues, setIssues] = useState<issue[]>([]);

  const { params } = useRouteMatch<RepositoryParams>();

  /*
   Quando a segunda requisição não depender da primeira para ser executada,
   a melhor solução é utilizar o .THEN;
   api.get(`repos/${params.repository}`).then(response => {
     console.log(response.data);
   });

   api.get(`repos/${params.repository}/issues`).then(response => {
       console.log(response.data);
   });
   */

  /*
    Utilizando o AWAIT a próxima requisição só será realizada quando 
    a requisição atual tiver sua resposta
  async function loadData(): Promise<void> {
    const repository = await api.get(`repos/${params.repository}`);
    const issues = await api.get(`repos/${params.repository}/issues`);

    console.log(repository);
    console.log(issues);
  }*/

  /*  Para fazer duas requisições simultaneamente podemos utilizar esse modelo
    da função a baixo;
   async function loadData(): Promise<void> {
     const [repository, issues] = await Promise.all([
       api.get(`repos/${params.repository}`),
       api.get(`repos/${params.repository}/issues`)
     ]);
 
     console.log(repository);
     console.log(issues);
   };
*/

  useEffect(() => {
    api.get(`repos/${params.repository}`).then(response => {
      setRepository(response.data);
    });

    api.get(`repos/${params.repository}/issues`).then(response => {
      setIssues(response.data);
    });
  }, [params.repository]);


  return (
    <>
      <Header>
        <img src={githubImage} alt="Github Explore" />
        <Link to="/">
          <FiChevronLeft size={16} />
        Voltar
      </Link>
      </Header>

      { repository ? (
        <RepositoryInfo>
          <header>
            {/* src={repository ? repository.owner.avatar_url : null}**/}
            <img
              src={repository.owner.avatar_url} alt={repository.owner.login} />
            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>
          </header>
          <ul>
            <li>
              <strong>{repository.stargazers_count}</strong>
              <span>Stars</span>
            </li>
            <li>
              <strong>{repository.forks_count}</strong>
              <span>Forks</span>
            </li>
            <li>
              <strong>{repository.open_issues_count}</strong>
              <span>Issues abertas</span>
            </li>
          </ul>
        </RepositoryInfo>
      ) : (
          <p>Carregando...</p>
        )}

      <Issues>
        {issues.map(issue => (
          <a key={issue.id} href={issue.html_url}>
            <div>
              <strong>{issue.title}</strong>
              <p>{issue.user.login}</p>
            </div>
            <FiChevronRight size={20} />
          </a>
        ))}
      </Issues>
    </>
  );
}

export default Repository;