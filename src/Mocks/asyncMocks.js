const products = [
  {
    id: "NOT2396",
    name: 'NOTEBOOK LENOVO 14" IDEAPAD 3 CELERON N4120 4GB 256GB W11H',
    category: "notebook",
    brand: "lenovo",
    images: [
      "/images/notebooks/NOT2396-000.jpg",
      "/images/notebooks/NOT2396-001.jpg",
    ],
    description: "Esta es una laptop Lenovo IdeaPad 3. Tiene una pantalla de 14 pulgadas y viene en color Azul Abismo. La laptop tiene un disco duro de 256 GB y funciona con el procesador Ryzen 5 3500U. Tiene 8 GB de memoria RAM y utiliza el sistema operativo Windows 10. Las características especiales de esta laptop incluyen tecnología anti-reflejo y biseles delgados. La tarjeta gráfica es integrada.",
    price: "184.900,00",
    currentPrice: "ARS",
    stock: 7,
  },
  {
    id: "NOT1495",
    name: 'NOTEBOOK ASUS 15.6" X515EA I3-1115G4 4GB 256GB FHD FREE',
    category: "notebook",
    brand: "asus",
    images: [
      "/images/notebooks/NOT1495-000.jpg",
      "/images/notebooks/NOT1495-001.jpg",
    ],
    description: `Esta es una laptop ASUS de la serie X515EA-BQ945T. Tiene una pantalla de 15.6 pulgadas y viene en color plateado. La laptop tiene un disco duro de 256 GB y funciona con el procesador Core i3. Tiene 4 GB de memoria RAM y utiliza el sistema operativo Windows 10 Home. Una característica especial de esta laptop es su diseño delgado. La tarjeta gráfica es integrada.`,
    price: "248.800,00",
    currentPrice: "ARS",
    stock: 3,
  },
  {
    id: "NOT2387",
    name: 'NOTEBOOK DELL 15.6" INSPIRON 3525 RYZEN 5 AMD R5 5625U 8GB 256GB FHD W1',
    category: "notebook",
    brand: "dell",
    images: [
      "/images/notebooks/NOT2387-000.jpg",
      "/images/notebooks/NOT2387-001.jpg",
    ],
    description: `Sistema Operativo Microsoft Windows 11
    PorcesadorAMD Ryzen 5 5625U
    Memoria 8GB DDR4 3200Mhz Non-ECC
    Almacenamiento 256GB SSD
    Unidad óptica No incluye
    Pantalla 15.6" FHD (1920 x 1080)
    Gráficos AMD® Radeon Graphics
    Cámara Si`,
    price: "339.000,00",
    currentPrice: "ARS",
    stock: 4,
  },
  {
    id: "NOT2397",
    name: 'NOTEBOOK LENOVO 15.6" THINKBOOK I5-1135G7 8GB 256GB FREE',
    category: "notebook",
    brand: "lenovo",
    images: [
      "/images/notebooks/NOT2397-000.jpg",
      "/images/notebooks/NOT2397-001.jpg",
    ],
    description: `Procesador: Intel Core i5-1135G7 (4C/8T, 2,4/4,2 GHz, 8 MB)
    Gráficos: Intel UHD Graphics
    Memoria: DDR4-3200 soldada de 8 GB, con una ranura DDR4 SO-DIMM compatible con dos canales. Memoria máxima de hasta 40 GB (8 GB soldados + 32 GB SO-DIMM) DDR4-3200.
    Almacenamiento: SSD de 256 GB M.2 2242 PCIe 3.0×4 NVMe + bahía de disco duro vacía. Soporte de almacenamiento en modo HDD/SSD: hasta dos unidades (1 HDD/SSD de 2,5" + 1 SSD M.2).
    Pantalla: FHD de 15,6" (1920 x 1080) TN 220 nits Antirreflejo, 45 % NTSC. No es táctil.
    Conectividad: Ethernet 100/1000M, WiFi + Bluetooth 11ac, 2×2 + BT5.0. Puertos estándar incluyen USB 3.2 Gen 1, USB-C 3.2 Gen 2, Thunderbolt 4 / USB4 40Gbps, HDMI 1.4b, lector de tarjetas, Ethernet (RJ-45), y conector combinado de auriculares/micrófono (3,5 mm).
    Seguridad y privacidad: Chip de seguridad Firmware TPM 2.0, lector de huellas dactilares, ranura de seguridad Kensington Nano, y cubierta de la cámara ThinkShutter.
    Dimensiones: 357 x 235 x 18,9 mm, peso de 1,7 kg.`,
    price: "549.865,00",
    currentPrice: "ARS",
    stock: 10,
  },
  {
    id: "NOT1825",
    name: 'NOTEBOOK ASUS 15.6" ROG RYZEN 7 R7 6800H RTX 3060 16GB 512GB AMD R7 W11H',
    category: "gamer",
    brand: "asus",
    images: ["/images/gamer/NOT1825-000.jpg", "/images/gamer/NOT1825-001.jpg"],
    description: `Procesador: AMD Ryzen 7 6800H Mobile Processor (8 núcleos/16 hilos, 20MB de caché, hasta 4.7 GHz de impulso máximo).
    Almacenamiento: SSD de 512GB.
    Memoria RAM: 16GB.
    Sistema Operativo: Windows 11 Home.
    Tamaño de pantalla: 15.6".
    Resolución de pantalla: 2560 x 1440 QHD.
    Conectividad: Wi-Fi, 4 puertos USB, 1 puerto HDMI, Bluetooth.
    Detalles adicionales: Webcam integrada, color negro.
    Dimensiones: 35.4 x 25.9 x 2.26 cm.
    Peso: 2.30 kg.`,
    price: "1.138.833,00",
    currentPrice: "ARS",
    stock: 5,
  },
  {
    id: "NOT2132",
    name: 'NOTEBOOK GIGABYTE 15.6" AORUS 15 XE4 I7-12700H 16GB 1TB RTX 3070 TI 165HZ W11H',
    category: "gamer",
    brand: "gigabyte",
    images: ["/images/gamer/NOT2132-000.jpg", "/images/gamer/NOT2132-001.jpg"],
    description: `Pantalla: 15.6"  2560×1440 - 165HZ
    Procesador: Intel Core i7 12700H
    Memoria: 16GB DDR4 3200 MHz
    Gráficos: NVIDIA GeForce RTX 3070 TI 8GB
    SSD: 1TB NVME PCIE 4.0
    Sistema Operativo: Windows 11 Home
    Conectividad: Intel Wi-Fi 6E AX210 (Gig+), Bluetooth v5.2
    Left side:1 x HDMI 2.11 x USB 3.2 Gen1 (Type-C with DP)1 x Audio combo jack1 x USB 3.2 Gen1 (Type-A)Right side:1 x DC input1 x Thunderbolt™ 4 (Type-C)1 x RJ45`,
    price: "1.257.264,00",
    currentPrice: "ARS",
    stock: 1,
  },
  {
    id: "NOT2263",
    name: 'NOTEBOOK ASUS 14.5" ZENBOOK PRO DUO I7-12700H 16GB 1TB DUAL SCREEN W11H',
    category: "notebook",
    brand: "asus",
    images: [
      "/images/notebooks/NOT2263-000.jpg",
      "/images/notebooks/NOT2263-001.jpg",
    ],
    description: `Sistema Operativo: Windows 11 Home.
    Procesador: Intel Core i7-12700H Processor 2.3 GHz (24M de caché, hasta 4.7 GHz, 6P+8E núcleos).
    Tarjeta Gráfica: Intel Iris Xe Graphics.
    Memoria RAM: 16GB LPDDR5.
    Almacenamiento: 1TB M.2 NVMe PCIe 4.0 Performance SSD.
    Pantalla: 2.8K (2880 x 1800) OLED con relación de aspecto 16:10.
    Pantalla adicional: ScreenPad Plus (12.7" 2880 x 864 Panel IPS nivel soporte para Stylus).
    Teclado: Retroiluminado.
    Color: Negro.
    Tecnologías: Wifi 6, certificación de grado militar.`,
    price: "1.342.392,00",
    currentPrice: "ARS",
    stock: 6,
  },
];

const DELAY = 200;

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, DELAY);
  });
};

export const getProductById = (productId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find((prod) => prod.id === productId));
    }, DELAY);
  });
};

export const getProductByCategory = (productCategory) => {
  return new Promise((resolve) => {
    setTimeout(()=>{
      resolve(products.filter((prod)=>prod.category === productCategory))
    },DELAY)
  })
}
