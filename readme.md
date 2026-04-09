# Series Tự Học TypeScript
![TypeScript Logo](./Sources/Images/typescript-logo.svg)

TypeScript là **JavaScript + kiểu dữ liệu tĩnh (static typing)**. Bạn vẫn viết JS như bình thường, nhưng TS giúp:

- Bắt lỗi sớm ngay khi code (IDE / compile-time)
- Tự động gợi ý tốt hơn (autocomplete, refactor, go to definition)
- Dễ bảo trì khi project lớn (hợp đồng type rõ ràng)

## Giới thiệu

Chào mừng bạn đến với series tự học TypeScript chi tiết.

TypeScript là một ngôn ngữ lập trình siêu tập hợp của JavaScript, giúp bạn:

- ✅ Sử dụng kiểu dữ liệu tĩnh để giảm lỗi khi phát triển
- ✅ Viết mã rõ ràng hơn bằng cách định nghĩa `interface`, `type`, và `enum`
- ✅ Tăng hiệu quả khi làm việc với các công cụ IDE như VS Code
- ✅ Dễ dàng bảo trì và mở rộng dự án JavaScript lớn

## Nội dung series

### 📘 Phần 1: Cơ bản về TypeScript
- Giới thiệu TypeScript và lợi ích
- Kiểu dữ liệu cơ bản: `number`, `string`, `boolean`, `null`, `undefined`
- Khai báo biến với `let`, `const`, và `var`

### 📗 Phần 2: Kiểu nâng cao
- `array`, `tuple`, `enum`
- `union` và `intersection`
- Kiểu `any`, `unknown`, `never`, `void`

### 📙 Phần 3: Kiểu tùy chỉnh
- `interface`
- `type alias`
- `class` và kế thừa trong TypeScript
- Access modifier: `public`, `private`, `protected`

### 📕 Phần 4: Thực hành
- Viết hàm generic
- Type guards và `type assertion`
- Tích hợp TypeScript với dự án JavaScript hiện có

## Vì sao nên học TypeScript?

- 🚀 Giảm thiểu lỗi khi chạy ứng dụng
- 🧠 Tăng tốc độ phát triển nhờ tính năng tự động hoàn thành
- 📂 Hỗ trợ tốt cho các dự án lớn và làm việc nhóm
- 🛠️ Dễ dàng chuyển đổi từ JavaScript sang TypeScript

## Tác giả

- 👨‍💻 Tác giả: **Vinhdev04**
- 🌐 GitHub: https://github.com/Vinhdev04

---
## Overview
- **Được phát triển bởi Microsoft**
- **Typescript = Javascript + Type**
- **Browers** -> ko thê hiểu TypeScript
- `Typescript -> TypeScript Compiler -> Javascript`
- Typescript sử dụng cú pháp của Javascript và bổ sung thêm các cú pháp mới để hỗ trợ "Types" (Các kiểu dữ liệu)
- Kiến thức về JS đều có thể áp dung trong JS
- **Tại sao nên sử dụng typeScript**:
  - Ép kiểu dữ liệu chặt chẽ hơn (giảm sự freedom so với javascript)
  - Sử dụng Type để định nghĩa dữ liệu, tương tự java, C#
  - Giúp hạn chế bugs, đặc biệt trong các dự án có khối codebase (dòng code) lớn
---

## Setup TypeScript
```
	npm i -g typescript@version ts.node@version
	npm install -g typescript
```
- `Tự động theo dõi file (Watch Mode):` Thay vì mỗi lần sửa code xong bạn phải gõ lại lệnh tsc file-name một cách thủ công, bạn có thể chạy lệnh tsc file-name --watch (hoặc -w) -> TypeScript compiler sẽ chạy ngầm; cứ mỗi khi bạn nhấn Save (Ctrl+S) file .ts, nó sẽ lập tức tự động biên dịch sang file .js mới nhất.
- ``File tsconfig.json:`` Khi làm việc với dự án thật, người ta không chạy lệnh tsc cho từng file đơn lẻ. Bạn sẽ khởi tạo một file cấu hình bằng lệnh `tsc --init`
- `Thực thi file TS trực tiếp bằng ts-node:` Nếu bạn chỉ muốn chạy thử thuật toán và xem log ra màn hình console mà không muốn sinh ra file .js rác, bạn có thể cài thêm thư viện ts-node (bằng lệnh `npm i -g ts-node`)
- `tsc không phải là lệnh để "chạy" code, nó là lệnh để "dịch" code.`
- `đôi khi chạy lệnh tsc <tên_file> nó vẫn không áp dụng cấu hình đó` -> **Khi chỉ định tên file cụ thể, TSC sẽ bỏ qua file cấu hình chung**
---

## tsconfig.json
- Chỉ cần chỉ định các cấu hình trong file `tsconfig.json`
```
    {
        "compilerOptions": {
            "pretty": true,
            "removeComments": true,    /* Giúp file .js sạch sẽ, không chứa ghi chú từ file .ts */
            "target": "ES6",           /* Dịch ra phiên bản JavaScript hiện đại hơn */
            "noImplicitAny": true ,     /* Ép bạn phải rõ ràng về kiểu dữ liệu, giúp code an toàn hơn */
            "noEmitOnError": true // TypeScript sẽ không tạo ra file JavaScript nếu code vẫn còn lỗi
        }
    }
```
---
> Đây là bộ tài liệu mô tả chi tiết cho series tự học TypeScript, dành cho người mới bắt đầu và cả lập trình viên muốn nâng cao kỹ năng.
