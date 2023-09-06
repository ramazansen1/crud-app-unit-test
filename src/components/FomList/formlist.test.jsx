// userForm bileşenin diğer bielşenlerden izole bir şekilde test edicez
// form gönderilince tabloya eleman eklenmesi mu kontrolü yap
//! formun mantığı doğru şekilde çalışıyor
// name ve email inputlatlarını doldurdaktan sonra
// formu gönderinde addUser fonksiyonu çalışyor mu?
// addUser fonksiyonuna doğru parametre gönderiliyor mu?

import { render, screen, waitFor } from "@testing-library/react";
import FormList from "./FormList";
import { expect, vi } from "vitest";
import userEvent from "@testing-library/user-event";

test("Form gönderilince addUser fonksiyonu parametreleri alarak doğru çalışıyor mu?", async () => {
  // mock > addUser fonksiyonunu taklit edicek
  // ve ne zman çağrıldı | hangi parametrelerele çağrıldı
  // tarzında testleri yapmamızı sağlıyacak bir test fonksiyonu
  const mock = vi.fn();
  const user = userEvent.setup();

  render(<FormList addUser={mock} />);

  // ilgili parametreleri çağırma
  const nameInput = screen.getByLabelText("İsim");
  const emailInput = screen.getByLabelText("Email");
  const submitBtn = screen.getByRole("button");

  // name inputunu doldurma
  await user.type(nameInput, "bilal");
  // email inputunu doldur
  await user.type(emailInput, "bilal@gmail.com");

  // formu gönder
  await user.click(submitBtn);

  // form gönderilince addUser fonk. çağırılıyor mu?
  expect(mock).toBeCalled();

  // addUser çağrılırken doğru parametreler gönderiliyor mu?
  expect(mock).toBeCalledWith({
    name: "bilal",
    email: "bilal@gmail.com",
  });
});

test("Form gönderiltikten sonra inputlar temizleniyor mu?", async () => {
  render(<FormList addUser={() => {}} />);

  const user = userEvent.setup();

  // ilgili elemanları alma
  const nameInput = screen.getByLabelText("İsim");
  const emailInput = screen.getByLabelText("Email");
  const submitBtn = screen.getByRole("button");

  // inputları doldurma
  await user.type(nameInput, "emre");
  await user.type(emailInput, "emre@gmail.com");

  // inputlara yazılan yazı value olarak eklendi mi
  expect(nameInput).toHaveValue("emre");
  expect(emailInput).toHaveValue("emre@gmail.com");

  // formu gönderelim
  await user.click(submitBtn);

  // form gönderildikten sonra inputlar temizleniyor mu?
  expect(nameInput).toHaveValue("");
  expect(emailInput).toHaveValue("");

  // name inputu boş mu?
  // state değişikliği direkt olarak gerçekleşmediği durumlarda
  // waitfor ile gerçekleşmesini beklebiliriz
  //   await waitFor(() => expect(nameInp).toHaveValue(''));
  //   await waitFor(() => expect(mailInp.value).toBe(''));
});
