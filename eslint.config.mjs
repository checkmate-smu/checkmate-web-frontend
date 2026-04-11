import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import fsdPlugin from "eslint-plugin-fsd-lint";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,

  // FSD 아키텍처 규칙
  {
    plugins: {
      fsd: fsdPlugin,
    },
    rules: {
      // FSD 레이어 의존성 방향 강제
      "fsd/forbidden-imports": ["error", {
        alias: { value: "@", withSlash: true },
        folderPattern: {
          enabled: true,
          regex: "^(\\d{2})-",
          extractionGroup: 1,
        },
      }],
      // 슬라이스 간 상대 경로 금지 (같은 슬라이스 내 ./ 허용)
      "fsd/no-relative-imports": "error",
      // 슬라이스 Public API (index.ts) 우회 금지
      "fsd/no-public-api-sidestep": "error",
      // 동일 레이어 내 슬라이스 간 참조 금지
      "fsd/no-cross-slice-dependency": "error",
    },
  },

  // 외부 라이브러리 barrel import 금지 (번들 성능)
  {
    rules: {
      "no-restricted-imports": ["error", {
        patterns: [
          {
            group: ["lucide-react"],
            message: "lucide-react barrel import 금지. 직접 경로 사용: import { Icon } from 'lucide-react/dist/esm/icons/icon'",
          },
        ],
      }],
    },
  },

  // Override default ignores
  globalIgnores([
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    "coverage/**",
  ]),
]);

export default eslintConfig;
