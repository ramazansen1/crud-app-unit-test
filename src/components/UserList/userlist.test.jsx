import { render, screen, within } from "@testing-library/react";
import UserList from "./UserList";
import { expect } from "vitest";

const users = [
  { name: "Ali", email: "ali@gmail.com" },
  { name: "ahmet", email: "ahmet@gmail.com" },
  { name: "elif", email: "elif@gmail.com" },
];

test("Her kullanıcı için ekrana bir satır basılıyor mu?", () => {
  render(<UserList users={users} />);

  // user tablosu içerisindeki bütün satırları al
  // within > bir kapsayıcı içerisinde ki child elemanları çağırmaya yarar.
  const rows = within(screen.getByTestId("users")).getAllByRole("row");

  // her satırda kullanıcı bilgileri geliyor mu?
  expect(rows).toHaveLength(users.length);
});

test("Her kullanıcı için ekranda name ve email gözüküyor mu?", () => {
  render(<UserList users={users} />);

  // her bir kullanıcı için ekrandaki
  // tablo hücrelerinde isim ve mail değerleri yazıyor mu
  for (const user of users) {
    const nameCell = screen.getByText(user.name);
    const emailCell = screen.getByText(user.email);

    // nameCell ekranda gözüküyor mu?
    expect(nameCell).toBeInTheDocument();
    // emailCell ekranda gözüküyor mu?
    expect(emailCell).toBeInTheDocument();
  }
});
