import React from 'react'
import Button from '@material-ui/core/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';

const Logout = ({ setUsername, setCategory, setDifficulty, setData, setQuestionNumber, setStop, setEarned }) => {

  const handleClick = () => {
    setUsername(null);
    setUsername(null);
    setCategory(null);
    setDifficulty(null);
    setQuestionNumber(1);
    setStop(false);
    setEarned("$ 0");
    setData([]);
  };
  return (
    <div>
      <Button
        style={{ fontSize: "60px", backgroundColor: "#3498DB", borderRadius: "50%"}}
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        onClick={handleClick}
      >
        <FontAwesomeIcon icon={faRightFromBracket} />
      </Button>
    </div>
  )
}

export default Logout;