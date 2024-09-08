<template lang="html">
  <form action="" class="footer__content-form" id="form">
    <label class="footer__content-form-label">
      Ваше имя
      <input type="text" name="" id="" placeholder="Ваше имя" required />
    </label>
    <label class="footer__content-form-label">
      Ваша почта
      <input type="text" placeholder="hussain@finesse.com" required />
    </label>
    <label class="footer__content-form-label">
      Ваше сообщение
      <textarea placeholder="Ваше сообщение"></textarea>
    </label>
    <button class="footer__content-form-btn">
      <span>Отправить</span>
      <svg width="17" height="15" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.75 1.25L16 7.5M16 7.5L9.75 13.75M16 7.5H1" stroke="white" stroke-width="1.5" stroke-linecap="round"
          stroke-linejoin="round" />
      </svg>
    </button>
  </form>
</template>

<style lang="scss" scoped>
.footer__content-form {
  padding: 50px;
  border-radius: 50px;
  background: var(--white);
  display: flex;
  flex-direction: column;
  transition: 0.5s;
  gap: 24px;

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 20px;
  }

  @media (max-width: 992px) {
    padding: 32px;
    margin-bottom: 10px;
  }

  @media (max-width: 576px) {
    border-radius: 24px;
  }

  &-label {
    display: flex;
    flex-direction: column;
    gap: 8px;
    font-weight: 600;
    font-size: 16px;
    color: var(--gray-500);

    & input,
    & textarea {
      box-shadow: 0 0 0 1px rgba(103, 110, 118, 0.16),
        0 2px 5px 0 rgba(103, 110, 118, 0.08);
      background: var(--white);
      padding: 10px 14px;
      border-radius: 50px;
      width: 320px;
      font-weight: 400;
      font-size: 16px;
      color: var(--gray-400);
      position: relative;

      @media (max-width: 992px) {
        width: 240px;
      }

      @media (max-width: 768px) {
        width: 100%;
      }

      &::placeholder {
        color: var(--gray-400);
      }
    }

    & textarea {
      resize: none;
      min-height: 104px;
      border-radius: 20px;
      font-weight: 400;
      font-size: 16px;
      color: var(--gray-400);

      &::placeholder {
        color: var(--gray-400);
      }
    }
  }

  &-btn {
    background: var(--primary-500);
    padding: 16px;
    border-radius: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;

    & span {
      font-weight: 600;
      font-size: 16px;
      text-align: center;
      color: var(--white);
    }
  }
}
</style>
