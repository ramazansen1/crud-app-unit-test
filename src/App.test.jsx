import { render, screen } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";
import { expect } from "vitest";

test("Uygulama doğru çalışıyor mu?", async () => {
  render(<App />);

  const user = userEvent.setup();

  // ilgili bileşenleri alma
  const nameInput = screen.getByLabelText("İsim");
  const emailInput = screen.getByLabelText("Email");
  const submitBtn = screen.getByRole("button");

  // inputları dolduralım
  await user.type(nameInput, "kerem");
  await user.type(emailInput, "kerem@gmail.com");

  // girilen değerler inputların valuelarına yazıldı mı
  expect(nameInput).toHaveValue("kerem");
  expect(emailInput).toHaveValue("kerem@gmail.com");

  // formu gönderelim
  await user.click(submitBtn);

  // inputlar gönderildikten sonra temizleniyor mu?
  expect(nameInput).toHaveTextContent("");
  expect(emailInput).toHaveTextContent("");

  // isim değerine karşılık gelen bir tablo hücresi ekran basıldı mı?
  // state güncellenmesi sonucu ekrna basıldığınıdan
  // async elemanları getiren find komutnu kullandık
  const nameCell = await screen.findByRole("cell", { name: "kerem" });
  const emailCell = await screen.findByRole("cell", {
    name: "kerem@gmail.com",
  });

  // ekranda gözüküyor mu?
  expect(nameCell).toBeInTheDocument();
  expect(emailCell).toBeInTheDocument();
});
