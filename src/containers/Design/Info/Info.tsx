import React from "react";
import { Link } from "react-router-dom";
import { Design } from "../../../store/design/types";
import styles from "./Info.module.scss";

interface InfoProps {
  design: Design | null;
}

const Info: React.FC<InfoProps> = ({ design }) => {
  const {
    alsoKnownAs,
    alsoKnownAsOriginCountry,
    originCountry,
    model,
    yearFrom,
    yearTo,
    designer,
    manufacturer,
    manufacturerUrl,
    manufacturerDescription,
    wikipediaUrl,
    recognitions,
  } = design ?? {};

  return (
    <div className={styles.info}>
      {model && (
        <p>
          <strong>Model:</strong> {model}
        </p>
      )}
      {alsoKnownAs && (
        <p>
          <strong>Also known as:</strong> {alsoKnownAs}
        </p>
      )}
      {alsoKnownAsOriginCountry && originCountry && (
        <p>
          <strong>Also known as in {originCountry && originCountry}:</strong>{" "}
          {alsoKnownAsOriginCountry}
        </p>
      )}
      {originCountry && (
        <p>
          <strong>Country:</strong> {originCountry}
        </p>
      )}
      {yearFrom && (
        <p>
          <strong>Year:</strong> {yearFrom}
          {yearTo && "-" + yearTo}
        </p>
      )}
      {designer && (
        <p>
          <strong>Designer:</strong>{" "}
          <Link to={`/designer/${designer.id}`}>{designer.name}</Link>
        </p>
      )}
      {manufacturer && (
        <p>
          <strong>Manufacturer:</strong>{" "}
          <Link to={`/manufacturer/${manufacturer.id}`}>
            {manufacturer.name}
          </Link>
        </p>
      )}
      {recognitions && (
        <p>
          <strong>Recognitions:</strong> {recognitions}
        </p>
      )}
      {manufacturerDescription && (
        <p className={styles.multiLine}>
          <strong>Manufacturer description</strong> <br />
          {manufacturerDescription}
        </p>
      )}
      {manufacturerUrl && (
        <p>
          <a href={manufacturerUrl} target="_blank" rel="noreferrer">
            Learn more on manufacturer website
          </a>
        </p>
      )}
      {wikipediaUrl && <a href={wikipediaUrl}>Learn more on Wikipedia</a>}
    </div>
  );
};

export default Info;
