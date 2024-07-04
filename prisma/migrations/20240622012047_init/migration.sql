-- CreateTable
CREATE TABLE "Consumo" (
    "id" SERIAL NOT NULL,
    "device" TEXT NOT NULL,
    "consumption" DOUBLE PRECISION NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Consumo_pkey" PRIMARY KEY ("id")
);
