import { useEffect } from "react";
import { Container, Spinner } from "react-bootstrap";
import { useAppSelector, useAppDispatch } from "../store/hook";
import { getUserInfo } from "../store/userSlice";
import * as userSelectors from "../store/selectors";

const UserPage = () => {
  const isLoading = useAppSelector(userSelectors.isLoadingSelect);
  const dataUser = useAppSelector(userSelectors.userInfoSelect);
  const err = useAppSelector(userSelectors.errorSelect);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getUserInfo());
  }, [dispatch]);

  return (
    <Container>
      {isLoading && <Spinner animation="border" variant="info" />}
      {err && <div>Упс... Возникла ошибка</div>}
      {dataUser && (
        <div>
          <p>first_name: {dataUser.first_name}</p>
          <p>last_name: {dataUser.last_name}</p>
          <p>email: {dataUser.email}</p>
          <p>is_verify_email: {dataUser.is_verify_email ? "true" : "false"}</p>
          <p>
            date_of_birthday:{" "}
            {!dataUser.date_of_birthday ? "null" : dataUser.date_of_birthday}
          </p>
          <p>country: {!dataUser.country ? "null" : dataUser.country}</p>
          <p>photo: {!dataUser.photo ? "null" : dataUser.photo}</p>
        </div>
      )}
    </Container>
  );
};

export default UserPage;
