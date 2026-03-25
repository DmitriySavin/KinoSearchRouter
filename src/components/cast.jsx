import { Link, useParams } from "react-router-dom";

const Cast = () => {
  const { moviesId } = useParams();

  return (
    <>
      <h2>Our Team</h2>
      <ul>
        <li>Здесь видимо должны быть участники команды</li>
        <li>только вот если они где то и были</li>
        <li>то я не понял где их взять</li>
        <li>4</li>
        <li>5</li>
      </ul>
    </>
  );
};

export default Cast;
