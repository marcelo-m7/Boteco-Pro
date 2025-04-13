# Boteco_PRO (Monorepo)

Este projeto reúne os dois principais componentes do sistema de gestão do restaurante **Boteco_PRO**:

1. [`boteco_pro_api/`](./boteco_pro_api) – API REST com FastAPI + SQL Server
2. [`boteco_pro_flutter/`](./boteco_pro_flutter) – Aplicativo Flutter com autenticação real

## 📦 Tecnologias principais

- **Frontend**: Flutter 3+, Dart
- **Backend**: FastAPI, pyodbc, bcrypt
- **Banco de Dados**: Microsoft SQL Server

## 📁 Estrutura do repositório

```
Boteco_PRO/
├── boteco_pro_api/            # FastAPI (Backend)
├── boteco_pro_flutter/        # Flutter (Frontend)
└── README.md
```

## ⚙️ Como rodar localmente

### 1. API
```bash
cd boteco_pro_api
pip install -r requirements.txt
uvicorn app.main:app --reload
```

### 2. Flutter App
```bash
cd boteco_pro_flutter
flutter pub get
flutter run
```

## 🔐 Login de Exemplo

Usuário: `Ana Gerente`  
Senha: `1234`  
(credenciais cadastradas com `bcrypt`)

## 📚 Documentação da API

Acesse via Swagger em:
📍 http://localhost:8000/docs

## 👨‍💻 Autor

Marcelo  
Computação Móvel – Universidade do Algarve (2024–2025)
