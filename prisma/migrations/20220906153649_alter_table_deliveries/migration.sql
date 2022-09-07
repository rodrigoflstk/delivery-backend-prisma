-- DropForeignKey
ALTER TABLE "deliveries" DROP CONSTRAINT "deliveries_delivery_id_fkey";

-- AlterTable
ALTER TABLE "deliveries" ALTER COLUMN "delivery_id" DROP NOT NULL,
ALTER COLUMN "end_at" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "deliveries" ADD CONSTRAINT "deliveries_delivery_id_fkey" FOREIGN KEY ("delivery_id") REFERENCES "deliveryman"("id") ON DELETE SET NULL ON UPDATE CASCADE;
